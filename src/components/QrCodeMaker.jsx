import React from "react";
import img from "../assets/images/MyQrCode.png";
import QrCodeMakerStyles from "../styles/QrCode/QrCodeMaker";

const QrCodeMaker = ({ mainText, paragraph }) => {
  return (
    <section className={`${QrCodeMakerStyles.QrContainer}`}>
        <div className={`${QrCodeMakerStyles.imgContainer}`}>
            <img src={img} className={QrCodeMakerStyles.imgStyle} alt="QrCode" />
        </div>

        <body className={`${QrCodeMakerStyles.bodyStyle}`}>
            <section className={QrCodeMakerStyles.mainSection}>
                <h1>
                    {mainText}
                </h1>
            </section>
            <section className={QrCodeMakerStyles.paragraphSection}>
                <p>
                    {paragraph}
                </p>
            </section>
        </body>
    </section>
  );
};

export default QrCodeMaker;
