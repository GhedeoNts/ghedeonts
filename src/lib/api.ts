export async function sendContactForm(data: any): Promise<Response> {
    return fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    }).then((res) => {
        if (!res.ok) {
            throw new Error("échec de l'envoi du message");
        }
        return res.json();
    });
}
