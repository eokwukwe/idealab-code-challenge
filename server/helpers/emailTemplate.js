export default url => `
    <body style="background-color: gray; display: flex; justify-content: center; align-items: center"">
    <div style="background-color: white; text-align: center; padding: 25px 15px">
      <h4>Welcome to IdeaLab Technology</h4>
			<p>Please click the link button below to confirm your registration</p>
			<a style="text-decoration:none; display:inline-block; background-color: lightgreen; padding:10px; font-size:12px; font-weight:bold; text-transform:uppercase; border-radius:3px;" target="_blank" href="${url}">Confirm Account</a>
    </div>
  </body>
`;
