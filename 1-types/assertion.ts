{
  // Type Assertion

  function jsStrFunc(): any {
    return 'hello';
  }

  const result = jsStrFunc();
  (result as string).length;
  (<string>result).length;

  const wrong: any = 5;
  (wrong as Array<number>).push(1); // ❌

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers!.push(2); // ❌
  // ! 는 ? 와 반대로 undefined , null 이 절대 아니라고 장담 할때 사용
}