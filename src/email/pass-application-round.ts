export const PassApplicationRound = (
  name: string,
  hiringProcessLink: string,
  position: string,
  googleChatLink: string,
  fanpageLink: string,
  gdscLink: string
) => {
  return `
    <p>Dear ${name},</p>
    <p>After reviewing and considering all the applications, we are pleased to inform you that <span style="color: #3b82f6;">You have successfully passed the application round for the ${position} position.</span></p>
    <p>As per the <a style="color: #3b82f6;" href="${hiringProcessLink}">hiring process</a>, candidates who pass the application round of Google Developer Student Clubs - UET will proceed to the Coding Test round. Please join <b><a href="${googleChatLink}" style="color: #3b82f6;">this Google Chat group</a></b> to receive more information about the Coding Test. All information regarding the Coding Test round will be communicated through <b><a href="${googleChatLink}" style="color: #3b82f6;">this Google Chat group</a></b>.</p>
    <p>Link Google Chat Group: <b><a style="color: #3b82f6" href=${googleChatLink}">[Link]</a></b></p>
    <p>After the <b>Coding Test</b> round is completed, we will carefully review the results to identify the most suitable candidates. The results of this round will be announced <span style="color: #3b82f6">approximately one week</span> after the completion of the test. Please keep an eye on your email and don't miss this opportunity.</p>
    <p>If you have any questions, please feel free to contact us directly through our <a href="${fanpageLink}" style="color: #3b82f6">fanpage</a>. In the meantime, you can also follow the <a href="${gdscLink}" style="color: #3b82f6">Google Developer Student Clubs - UET website</a> for the latest updates.</p>
  `
}
