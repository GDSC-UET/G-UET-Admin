export const PassCodingTest = (
  name: string,
  hiringProcessLink: string,
  fanpageLink: string,
  gdscLink: string,
  position: string
) => {
  return `
    <p>Dear ${name},</p>
    <p>After evaluating your participation and results in the Coding Test, we are pleased to inform you that <span style="color: #3b82f6">You have successfully passed the Coding Test for the ${position} position</span>.</p>
    <p>As per our <a style="color: #3b82f6" href="${hiringProcessLink}">hiring process</a>, candidates who pass the <b>Coding Test</b> will proceed to the <b>interview round</b>. During the interview, we will delve deeper into your knowledge and understanding of <b>technology</b>. We will also discuss your career orientation, work style, and technology experiences.</p>
    <p>Once the <b>interview round</b> is complete, we will carefully review the information gathered during the interview along with the results from previous rounds to identify the best candidates. The interview results will be announced <span style="color: #3b82f6">approximately one week</span> after the interview. Please keep an eye on your email and don't miss this opportunity.</p>
    <p>If you have any questions, please feel free to contact us directly through our <a href="${fanpageLink}" style="color: #3b82f6">fanpage</a>. In the meantime, you can also follow the <a href="${gdscLink}" style="color: #3b82f6">Google Developer Student Clubs - UET website</a> for the latest updates.</p>
  `
}
