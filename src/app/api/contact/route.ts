import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, company, phone, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Devolex Site <onboarding@resend.dev>', 
      to: ['devolex.digital@gmail.com'], 
      replyTo: email,
      subject: `Novo pedido de orçamento: ${name}`,
      html: `
        <h2>Novo Pedido de Orçamento</h2>
        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="background-color: #f9fafb; font-weight: bold; width: 30%;">Nome</td>
            <td>${name}</td>
          </tr>
          <tr>
            <td style="background-color: #f9fafb; font-weight: bold;">Empresa</td>
            <td>${company || 'Não informado'}</td>
          </tr>
          <tr>
            <td style="background-color: #f9fafb; font-weight: bold;">Telefone</td>
            <td>${phone}</td>
          </tr>
          <tr>
            <td style="background-color: #f9fafb; font-weight: bold;">E-mail</td>
            <td>${email}</td>
          </tr>
          <tr>
            <td style="background-color: #f9fafb; font-weight: bold;">Mensagem</td>
            <td>${message}</td>
          </tr>
        </table>
      `,
    });

    if (error) {
      console.error('Error sending email via Resend:', error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ success: false, error: 'Failed to process request' }, { status: 500 });
  }
}
