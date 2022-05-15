import Link from 'next/link'
export const headPages = () => {
  return (
    <div>
      <div className="z-0 grid-cols-2 grid-flow-col flex justify-center">
        <div>
          <img
            style={{ float: 'left' }}
            src="/images/head.png"
            className="lg:w-20 md:w-20 sm:w-20 w-20 md:ml-16 sm:mb-16 content-center"
          ></img>
        </div>
        <div className="py-4">
          <h1
            className="px-4 content-center"
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: '24px',
              textShadow: '#1284AF 0px 5px 5px',
              fontWeight: 900,
              float: 'right'
            }}
          >
            SUEASONGTUA SUSHI
          </h1>
        </div>
      </div>
    </div>
  )
}
