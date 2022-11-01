export function Title ({ as = 'h1', children }) {
  const Tag = as
  return <Tag className='mt-3 leading-5 font-bold text-5xl'>{children}</Tag>
}
