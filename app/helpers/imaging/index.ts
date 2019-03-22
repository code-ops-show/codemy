const imaging = (
  url_template: string,
  width: string,
  height: string
): string | undefined => {
  if (url_template)
    return `https://www.codemy.net${url_template}`
      .replace('{{width}}', width)
      .replace('{{height}}', height)

  return undefined
}

export default imaging
