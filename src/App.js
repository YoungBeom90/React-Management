import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/Table';
import TableBody from '@material-ui/core/Table';
import TableRow from '@material-ui/core/Table';
import TableCell from '@material-ui/core/Table';

const customers= [
  {
  'id' : 1, 
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '김영범',
  'birthday' : '900216',
  'gender' : '남자',
  'job' : '직장인'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '홍길동',
    'birthday' : '920222',
    'gender' : '남자',
    'job' : '예술인'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '김철수',
    'birthday' : '930222',
    'gender' : '남자',
    'job' : '대학생'
  }
]

class App extends Component {
  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            customers.map(c => {
              return(
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              )
            })
          }
        </TableBody>
      </Table>
    );
  }
}

export default App;
