const copyClipboardText = async () => {
  const text = window.location.href;
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    return false;
  }
};

export default copyClipboardText;
