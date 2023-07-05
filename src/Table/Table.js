import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import styles from './Table.module.css';

const TableGenerator = () => {
  const [number, setNumber] = useState('');
  const [table, setTable] = useState([]);

  const generateTable = () => {
    const num = parseInt(number);
    if (isNaN(num) || num <= 0) {
      setTable([]);
      return;
    }

    const tableData = [];
    for (let i = 1; i <= 10; i++) {
      tableData.push(
        <tr key={i}>
          <td>{num}</td>
          <td>*</td>
          <td>{i}</td>
          <td>=</td>
          <td>{num * i}</td>
        </tr>
      );
    }

    setTable(tableData);
  };

  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      generateTable();
    }
  };

  const handleDelete = () => {
    setNumber('');
    setTable([]);
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
        onKeyPress={handleEnterKey}
        className={styles.inputField}
      />
      <button onClick={handleDelete} className={styles.deleteButton}>
        <AiOutlineDelete />
      </button>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Number</th>
            <th></th>
            <th>Multiplier</th>
            <th></th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </div>
  );
};

export default TableGenerator;

