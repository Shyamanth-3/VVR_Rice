def convert_blob_to_raw(blob_url: str) -> str:
    """
    Convert a GitHub blob URL to a raw content URL.
    """
    if not blob_url.startswith("https://github.com/"):
        return blob_url  # not a GitHub link, return as-is

    if "/blob/" not in blob_url:
        return blob_url  # already raw or invalid

    raw_url = blob_url.replace("https://github.com/", "https://raw.githubusercontent.com/")
    raw_url = raw_url.replace("/blob/", "/")
    return raw_url


if __name__ == "__main__":
    print("🔁 GitHub Blob → Raw URL Converter")

    # Option 1: Paste URLs manually
    print("\nPaste your blob URLs (one per line). Type END to finish:\n")
    urls = []
    while True:
        line = input()
        if line.strip().upper() == "END":
            break
        urls.append(line.strip())

    print("\n✅ Converted Raw URLs:\n")
    for url in urls:
        print(convert_blob_to_raw(url))
