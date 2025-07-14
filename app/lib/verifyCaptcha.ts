export async function verifyCaptcha(captchaResponse: string) {
  const params = new URLSearchParams();
  params.append("secret", process.env.PRIVATE_CAPTCHA as string);
  params.append("response", captchaResponse);

  // get the response from google
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    }
  );

  // if response is not 200 status then return an error
  if (!response.ok) {
    console.error(`Failed to start captcha verification: ${response}`);
    throw new Error("Failed to start captcha verification");
  }

  const data = await response.json();

  // if the data is not successful then return an error
  if (!data.success) {
    console.error(`Recaptcha verification failed ${data['error-codes']}`)
    throw new Error(`Recaptcha verification failed ${data['error-codes']}`);
  }
}