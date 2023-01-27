export const Head = ({ title, description, ogImage }) => {
  return (
    <>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width,minimum-scale=1,initial-scale=1' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:url' content='https://reactjs.wiki' />
      <meta property='og:site_name' content='React.js Wiki' />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='es_ES' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@midudev' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <link href='favicon.ico' rel='icon' media='(prefers-color-scheme: light)' />
      <link href='favicon.dark.ico' rel='icon' media='(prefers-color-scheme: dark)' />
    </>
  )
}
