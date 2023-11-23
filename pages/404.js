import Link from 'next/link'

function PageNotFound () {
  return (
    <div className="general-margin flex flex-col space-y-5 items-center justify-center text-center h-[100vh] w-full">
      <p className="p-lg">Oops, it looks like you have taken a wrong turn.</p>
      <p className="p-lg">Let us get you back on track.</p>
      <Link href={'/'} className='btn-secondary'>Back to Homepage</Link>
    </div>
  )
}

export default PageNotFound