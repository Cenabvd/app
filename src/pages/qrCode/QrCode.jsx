import React from 'react'
import QrCodeMaker from '../../components/QrCodeMaker'
import QrCodeData from '../../data/QrCode/QrCodeData'

const QrCode = () => {
  return (
    <main className='w-screen h-screen bg-[#d6e2f0] flex items-center justify-center'>
      <QrCodeMaker imgSrc={QrCodeData.src} mainText={QrCodeData.mainText} paragraph={QrCodeData.paragraph}/>
    </main>
  )
}

export default QrCode
