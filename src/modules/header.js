class Header{
  constructor(title){
    this.title = title;
  }
}

export const header = new Header('Holidays can be stressful, so let your generator decided you lunch for you!');

class Introduction{
  constuctor(hello_you){
    this.hello_you = hello_you;
  }
}

function showMessage() {
  alert( 'Welcom to the Christmas Lunch Generator. To continue click ok twice.' );
}

let hello_you = showMessage();
export const title = showMessage();
