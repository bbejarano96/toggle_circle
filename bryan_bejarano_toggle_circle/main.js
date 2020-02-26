
const changeShape = () => {
    const square = document.getElementById("square");
    if (square.style.backgroundColor === "blue") {
      square.style.backgroundColor = "purple";
      square.style.borderRadius = "50%";
      document.body.style.backgroundColor = "orange";
    } else {
      square.style.backgroundColor = "blue";
      square.style.borderRadius = "0";
      document.body.style.backgroundColor = "red";
    }
  };

  function clearBg() {
    window.location.reload();
  }











  const btnSquare = document.getElementById("btn-square");
  const btnRefresh = document.getElementById("btn-refresh");







  btnSquare.addEventListener("click", changeShape);
  btnRefresh.addEventListener("click", clearBg);
