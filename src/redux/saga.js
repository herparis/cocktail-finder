import { FinderScreenSagaActions } from './sagaActions'

function* saga() {
  yield FinderScreenSagaActions()
}

export default saga