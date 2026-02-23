document.addEventListener("DOMContentLoaded", () => {
  var Var = document.getElementById("var");
  let Let = document.getElementById("let");
  const Const = document.getElementById("const");
  const varDetails = document.getElementById("vardetails");
  const letDetails = document.getElementById("letdetails");
  const constDetails = document.getElementById("constdetails");

  Var.addEventListener("click", () => {
    varDetails.innerHTML =
      "Hi, I am var You can redeclare me. You can reassign me.I have function scope, not true block scope.If I am declared outside any function, I become global scope.I am hoisted, and initialized with undefined.That means you can use me before declaration, but my value will be undefined.";
  });
  Let.addEventListener("click", () => {
    letDetails.innerHTML =
      "Hi, I am let You cannot redeclare me in the same scope.You can reassign me.I have block scope.If I am declared outside, I also become global scope (but I don’t attach to window object).I am hoisted, but I stay inside the Temporal Dead Zone (TDZ).You cannot use me before declaration.";
  });
  Const.addEventListener("click", () => {
    constDetails.innerHTML =
      " Hi, I am const.You cannot redeclare me.You cannot reassign me.I must be initialized at the time of declaration.I have block scope.If declared globally, I don’t attach to the window object.I am also hoisted, but inside the Temporal Dead Zone (TDZ).If I store an object or array, you can modify its properties — but you cannot replace me.";
  });
});
