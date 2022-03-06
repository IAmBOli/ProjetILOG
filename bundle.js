(() => {
  // part.js
  function createPart(n) {
    let newP = document.createElement("p");
    newP.textContent = `voici le corps de la partie ${n}            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie turpis sed faucibus maximus. Aliquam tempus eleifend enim quis aliquam. Phasellus finibus ipsum sapien. Aliquam interdum porttitor tortor vitae egestas. Praesent velit sem, consectetur non commodo ac, rutrum ac nunc. Curabitur vitae odio porttitor, faucibus augue at, eleifend metus. Proin et suscipit odio. Nullam vehicula velit ac purus scelerisque viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis accumsan commodo porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Donec quam ligula, pharetra vitae risus eu, sodales faucibus leo. In elementum volutpat interdum. Quisque quis arcu elementum, molestie ipsum eget, tincidunt nunc. Mauris laoreet quam id urna ultrices, ac pretium sapien feugiat. Sed euismod suscipit ligula et auctor. Nunc nec felis nec massa facilisis aliquam. Pellentesque vitae finibus lacus, et aliquet quam.
    
    Donec pellentesque eu urna non laoreet. Fusce sed viverra enim. Sed fermentum molestie leo sit amet semper. Cras eleifend rhoncus enim nec ultrices. Vivamus justo augue, bibendum vitae neque ut, porttitor sagittis mi. Nullam tincidunt lacinia elit eget convallis. Mauris placerat vel sem eget sodales. Sed a neque vel ligula congue accumsan. Sed sodales lacinia augue, non porttitor leo tempus a. Morbi gravida sapien sit amet sagittis egestas. Morbi eu nulla id orci vehicula sollicitudin nec in urna. Cras sed nisi commodo, vestibulum sem quis, pretium lorem. Proin at luctus velit. Nam aliquet sagittis turpis vitae consequat. Quisque tempor malesuada ornare. Nulla facilisi.
    
    Vestibulum at sem a tortor pharetra auctor sagittis nec dolor. Proin et faucibus nunc, nec hendrerit sem. Donec vehicula massa sapien, eget volutpat urna aliquet ac. Nam elit lectus, vulputate placerat ultricies consectetur, mollis non eros. Nunc id libero convallis nibh volutpat laoreet sed ut eros. Sed nec gravida tellus. Nulla quis lobortis felis, nec laoreet tellus. Sed non nisi at arcu euismod cursus id eget leo. Aliquam laoreet mollis felis, pretium viverra felis porttitor at. Vestibulum vel vulputate purus, in sagittis arcu. Morbi id ante quis leo auctor iaculis. In lobortis, enim cursus lacinia placerat, leo tellus vehicula elit, interdum pellentesque tellus lectus id leo.
    
    Donec turpis augue, porta sit amet blandit eu, lacinia nec nulla. Nullam diam purus, congue ut pretium ac, vulputate ut ipsum. Duis gravida, felis tempor porta egestas, tortor quam interdum ipsum, nec ornare arcu purus sed neque. Fusce nec tempor felis. Vestibulum euismod elit at sapien tristique sodales. Praesent non pellentesque orci. Proin consectetur consectetur quam, id lobortis ligula egestas vitae. Sed feugiat tortor tempor, sodales nunc ac, sodales mi. Fusce faucibus tempor quam eget rutrum. Vestibulum quis dui lobortis, convallis risus sit amet, malesuada sem. Nunc quis maximus nisi. Mauris ullamcorper nibh quis ex consequat tempus. Ut quis sagittis erat. Aliquam urna enim, blandit vel congue eget, rutrum a dolor. Mauris a condimentum turpis.
`;
    return newP;
  }

  // app.js
  var nb = 0;
  var main = document.querySelector("main");
  function clonePart() {
    nb += 1;
    var clone = createPart(nb);
    return clone;
  }
  function appendAndObserve(observer, element) {
    main.appendChild(element);
    observer.observe(element);
  }
  var callback = function(entries) {
    const entry = entries[0];
    if (entry.isIntersecting) {
      this.unobserve(entry.target);
      const newPart = clonePart();
      appendAndObserve(this, newPart);
    }
  };
  var intersectionObserver = new IntersectionObserver(callback);
  var initial = clonePart();
  appendAndObserve(intersectionObserver, initial);
})();
