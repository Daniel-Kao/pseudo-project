import Mock from 'mockjs'
import axios from 'axios'

Mock.setup({timeout: '400-1000'})

Mock.mock(/\.json/, {
    'list|5-10': [{
        'firstName': '@cname(5)',
        'lastName': '@cname(5)'
    }]
})


export const _getMockData = () => axios.get('abc.json')