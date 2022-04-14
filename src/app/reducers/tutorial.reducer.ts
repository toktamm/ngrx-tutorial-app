import { Action } from "@ngrx/store";
import { Tutorial } from "../models/tutorial.model";
import * as TutorialActions from './../actions/tutorial.actions'

const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com'
}

//reducer is what takes the incoming action and decides what to do with it
//takes the previous state and returns a new state based on the given action and the payload (data that is coming through)
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
  switch(action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];
      default:
        return state;
  }
}
