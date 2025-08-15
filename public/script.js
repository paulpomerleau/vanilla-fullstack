document.addEventListener("DOMContentLoaded", () => {
  const elements = {
    form: document.querySelector(".form"),
    response: document.querySelector('.response'),
    submitBtn: document.querySelector('[type="submit"]'),
    firstName: document.querySelector('[name="firstName"]'),
    lastName: document.querySelector('[name="lastName"]')
  };

  async function save() {
    elements.submitBtn.disabled = true;
    elements.response.textContent = "";
    try {
      const resp = await fetch("http://localhost:3001/submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: elements.firstName.value.trim(),
          lastName: elements.lastName.value.trim()
        })
      });
      const data = await resp.json();
      elements.response.textContent = `Status: ${resp.status}\nResponse:\n` + JSON.stringify(data, null, 2);
    } catch (e) {
      elements.response.textContent = "Network error";
    } finally {
      elements.submitBtn.disabled = false;
    }
  }

  elements.form.addEventListener("submit", (e) => {
    console.log("Form submitted");
    e.preventDefault();
    save();
  });
});
