### react-todo


- Assume that todo "title" is unique value. There is no validation if it really is. In real world application it would be some unique ID from DB.
- I focused only at logic. It is clean React solution
- Form validation is based on udemy course. It is very nice and generic solution.

TODO:
- check if whole form is valid to disable buttons. 
  - solution: iterate over all addForm keys and set state.isValid = true if all addForm[key].valid are true
