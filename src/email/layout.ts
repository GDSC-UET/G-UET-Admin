export const MailLayout = (gdscLink: string, fanpageLink: string, children: string) => {
  return `<div style="border: 1px solid #3b82f6; width: 600px; font-family: sans-serif">
      <div
        style="
          border-bottom: 1px solid #3b82f6;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 120px;
        "
      >
        <img
          src="https://res.cloudinary.com/dszkt92jr/image/upload/v1724506930/logo_uno9g7.png"
          alt="Logo"
          style="width: 500px"
        />
      </div>
      <div style="padding: 24px 16px;">
        ${children}
        <a href="${gdscLink}" style="text-decoration: none;"><button style="margin-left: auto; margin-right: auto; margin-top: 40px; cursor: pointer ;color: #fff; border: none; border-radius: 1000px; width: 170px; height: 40px; display: flex; align-items: center; justify-content: center; gap: 4px; background: #3b82f6">Visit our website <img src="https://res.cloudinary.com/dszkt92jr/image/upload/v1720703607/arrow-small-right_bemnqd.png" style="width: 20px;" alt="button" /></button></a>
      </div>
      <div
        style="
          border-top: 1px solid #3b82f6;
          width: 540px;
          height: 200px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 0 30px;
          gap: 28px;
          background: #F1F5F9;
        "
      >
        <img
          src="https://res.cloudinary.com/dszkt92jr/image/upload/v1724506930/logo_uno9g7.png"
          alt="Logo"
          style="width: 350px"
        />
        <p style="font-size: 12px; display: flex; flex-direction: column; gap: 4px;">
          <span>© 2024 Google Developer Student Clubs - UET </span
          <span>144 Xuan Thuy, Dich Vong Hau, Cau Giay, Ha Noi</span>
        </p>
        <a href="${fanpageLink}">
          <img
            src="https://res.cloudinary.com/dszkt92jr/image/upload/v1720703779/Social_Icon_Link_ibwiog.png"
            alt="Fanpage"
            style="width: 20px"
          />
        </a>
      </div>
    </div>`
}
