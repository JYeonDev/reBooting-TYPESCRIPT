{
	type SuccessState = {
    result: 'success';
		response: {
			body: string;
		};
	}
	type FailState = {
    result: 'fail';
		reason: string;
	}
	type LoginState = SuccessState | FailState;
	function login(): LoginState {
		return {
      result: 'success'
			response: {
        body: 'logged in!',
      }
		}
	}
	
	// printLoginState(state)
	// success => 성공! body
	// fail => 실패! reason

  function printLoginState(state: LoginState) {
    if(state.result === 'success') {
      console.log(`nice ${state.response.body}`)
    } else {
      console.log(`nice ${state.reason}`)
    }
  }
}