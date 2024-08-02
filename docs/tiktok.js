// Slider
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const sliderButton = document.querySelector(".slider-button");
  const sliderOptions = document.querySelectorAll(".slider-option");

  sliderOptions.forEach((option, index) => {
    option.addEventListener("click", () => {
      sliderButton.style.left = `${index * 33.33}%`;
      sliderOptions.forEach((opt) => opt.classList.remove("active"));
      option.classList.add("active");
    });
  });
});

// Popup Overlay
document.addEventListener("DOMContentLoaded", () => {
  const openPopupBtn = document.getElementById("openPopupBtn");
  const popupOverlay = document.getElementById("popupOverlay");
  const closePopupBtn = document.getElementById("closePopupBtn");
  const uploadBtn = document.getElementById("uploadBtn");
  const fileInput = document.getElementById("fileInput");

  openPopupBtn.addEventListener("click", () => {
    popupOverlay.style.display = "flex";
  });

  closePopupBtn.addEventListener("click", () => {
    popupOverlay.style.display = "none";
  });

  uploadBtn.addEventListener("click", () => {
    const file = fileInput.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          alert(`File ${data.filename} uploaded successfully.`);
          popupOverlay.style.display = "none";
        })
        .catch((error) => {
          alert("An error has occurred when uploading the file.");
          console.error("Error:", error);
        });
    } else {
      alert("Please select a file to upload.");
    }
  });

  popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.style.display = "none";
    }
  });
});
