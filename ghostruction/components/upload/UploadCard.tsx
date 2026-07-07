async function handleFile(
  file: File,
  setLoading: (loading: boolean) => void,
  setFileName: (name: string) => void,
  onUpload: (blueprint: any) => void
) {
  setLoading(true);
  setFileName(file.name);

  try {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    // IMPORTANT: send processed result, NOT blob URL
    onUpload(data.blueprint);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
}