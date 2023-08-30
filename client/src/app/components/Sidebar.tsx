import React from 'react'

function Sidebar() {
  return (
    <div className='bg-[#101828] grow-0 shrink-0 basis-auto box-border pt-8 pb-6 px-4'>
        <div className='flex justify-start items-stretch flex-col box-border'>
            <img src='Logomark.png' className='w-[32px] h-[32px]'/>
        <div className='bg-[#344054] flex justify-center items-stretch flex-col h-12 grow-0 shrink-0 basis-auto box-border mt-6 px-3 rounded-md'>
            <img src='scheduleIcon.png' className='w-[32px] h-[32px]'/>
        </div>
        </div>
        <div className='box-border mt-[760px]'>
        <img src='https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1693785600&Signature=afhfzXhCKC6V6eLqwKo7acgtjXoSBv9Zw6SKmNQks74P0Nn3xSgX5alsTVlAmNG7eRno9gsQ4i6aIHV0Dz16g2j~7cg2PaBwl44BmV7GyVX5681ZxvszVQqs28pEmNg3imROF4eHWg~c3r8wZU0wh-uMyYPoCk8eQf4xEAIB4cbf1wKIEkDnG93fXeqrruK9iaZ6uD51~se6dy~AoQuJUO1KzShzji84EhS3n09XX2L21zZIfvhGfbksfVw03pEbQ0FgjQmG~yox20HZqCWGGVieHjNaIrwxmnp-gMmKeSN~uQOCPbq8EQD954gcD7IpNaOKc87l8CkrvmuCaeBNlQ\_\_&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            className='w-12 h-12 max-w-[initial] box-border object-cover block rounded-[200px] border-[none] '/>
        </div>
  </div>

  )
}

export default Sidebar