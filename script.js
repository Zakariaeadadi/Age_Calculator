function calculateAge() {
  const input = document.getElementById("birthDate").value;
  if (!input) return;

  const birthDate = new Date(input);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += prevMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const diff = today - birthDate;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const totalDays = Math.floor(hours / 24);
  const weeks = Math.floor(totalDays / 7);
  const totalMonths = Math.floor(totalDays / 30.44);
  const totalYears = Math.floor(totalDays / 365.25);

  const box = document.createElement("div");
  box.classList.add("box");

  box.innerHTML = `
    <h3>Your Age :</h3>
    <p><strong>${years}</strong> Years, <strong>${months}</strong> Months, <strong>${days}</strong> Days</p>
    <hr>
    <p><strong>${totalMonths}</strong> Months</p>
    <hr>
    <p><strong>${weeks}</strong> Weeks</p>
    <hr>
    <p><strong>${totalDays}</strong> Days</p>
    <hr>
    <p><strong>${hours}</strong> Hours</p>
    <hr>
    <p><strong>${minutes}</strong> Minutes</p>
    <hr>
    <p><strong>${seconds}</strong> Seconds</p>
  `;

  const oldBox = document.querySelector(".box");
  if (oldBox) oldBox.remove();

  document.querySelector("header").appendChild(box);
}

document.getElementById("calculateBtn").addEventListener("click", calculateAge);