import { assert } from 'chai'
import App from '../App'

describe('initial', () => {
    it('should start app', () => {
        assert.equal(App.run(), 'App start')
    })
})