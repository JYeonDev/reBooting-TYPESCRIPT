{
	// Type Aliases
	type Text = string;
	// Text는 문자열 타입으로 대체해서 사용이 가능하다
	const name: Text = 'kim';
	type Num = number;
	type Student = {
		name: string;
		age: number;
	};
	const student: Student = {
		name: 'kim',
		age: 28
	}

	// String Literal Types
	type Name = 'name';
	let firstName: Name;
	firstName = 'name';
	type JSON = 'json';
	const json: JSON = 'json';
}