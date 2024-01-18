import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";

interface Props {
  imagemUrl: string;
  fileName: string;
  extensao?: string | "jpg"
}

export default function DownloadButton({ imagemUrl, fileName }: Props) {
  const handleDownload = async () => {
    try {
      const response = await fetch(imagemUrl);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = downloadUrl;
      a.download = `${fileName}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error during download:", error);
    }
  };

  return (
    <Button className="gap-2 " onClick={handleDownload}>
      <DownloadIcon />
      Download
    </Button>
  );
}
