<script>
  import emailjs from 'emailjs-com';

  let name = '';
  let email = '';
  let message = '';
  let status = '';
  let isSending = false; // Prevent spam clicks
  let lastSendTime = 0; // Cooldown timer

  const SERVICE_ID = 'service_jkq5b3u';
  const TEMPLATE_ID = 'template_pkf9tia';
  const PUBLIC_KEY = 'Rck1sjqBH0dNeF-aW';

  const COOLDOWN_MS = 60000; // 60 seconds between sends

  const sendEmail = async () => {
    const now = Date.now();
    if (now - lastSendTime < COOLDOWN_MS) {
      status = `⏳ Please wait a few seconds before sending again.`;
      return;
    }

    if (!message) {
      status = "Please write your message.";
      return;
    }

    isSending = true; // Disable button
    status = "📨 Sending...";
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: name || "Anonymous", from_email: email || "no-email-provided", message: message },
        PUBLIC_KEY
      );
      status = "✅ Message sent successfully!";
      name = email = message = '';
      lastSendTime = now; // Update last sent time
    } catch (error) {
      console.error("Email send error:", error);
      status = "❌ Failed to send message. Try again.";
    } finally {
      isSending = false; // Re-enable after attempt
    }
  };
</script>

<div class="contact-container">
  <h1>Connect with us!</h1>

  <!-- Instagram -->
  <h2>
<!--TODO: add href="ourInstagramLink"      -->
    <a
       target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <img src="/insta.jpg" alt="Instagram logo" style="height: 100px; width: auto;" />
    </a>
  </h2>

  <!-- CampusGroups -->
  <h2>
    <a href="https://campusgroups.rit.edu/CCT/"
       target="_blank" rel="noopener noreferrer" aria-label="CampusGroups">
      <img src="/campusgroups.png" alt="CampusGroups logo" style="height: 100px; width: auto;" />
    </a>
  </h2>

  <h2>📧 Feel free to reach out here!</h2>
  <input type="text" placeholder="Name (optional)" bind:value={name} />
  <input type="email" placeholder="Contact (optional)" bind:value={email} />
  <textarea placeholder="Your message..." bind:value={message}></textarea>
  <button on:click={sendEmail} disabled={isSending}>
    {isSending ? "Sending..." : "Send! ➤📤📨⌯⌲"}
  </button>
  {#if status}
    <p class="status">{status}</p>
  {/if}
</div>

<style>
  h2 {
    display: inline-block;
    margin: 0 1rem 0 0;
  }

  h2 a img {
    vertical-align: middle;
    height: 36px;
    width: auto;
    cursor: pointer;
    transition: filter 0.3s ease;
  }

  h2 a:hover img {
    filter: brightness(1.2);
  }

  .contact-container {
    max-width: 400px;
    margin: auto;
    padding: 2rem;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    font-family: system-ui, sans-serif;
  }

  input, textarea {
    padding: 0.8rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
    width: 90%;
    display: block;
  }

  textarea {
    resize: none;
    height: 100px;
  }

  button {
    background: #1a73e8;
    color: white;
    padding: 0.8rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.2s;
    width: 90%;
  }

  button:disabled {
    background: #999;
    cursor: not-allowed;
  }

  button:hover:not(:disabled) {
    background: #155ab6;
  }

  .status {
    text-align: center;
    font-weight: bold;
  }
</style>