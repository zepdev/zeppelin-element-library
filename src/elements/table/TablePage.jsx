import React from 'react';

function TablePage() {
  const themes = ['zeppelin', 'cat', 'rental'];
  return (
    <>
      {themes.map(elem => (
        <table
          className={`theme-${elem}`}
          key={elem}
          style={{ marginBottom: 15 }}
        >
          <caption className="zep-visually-hidden">{`table ${elem}`}</caption>
          <thead className="">
            <tr className="table-header">
              {[1, 2, 3].map(elem => (
                <th
                  scope="col"
                  className="table-header--cell"
                  key={`col${elem}`}
                >
                  Header {elem}
                </th>
              ))}
            </tr>
            <tbody className="">
              {[1, 2].map(elem => (
                <tr
                  className={
                    elem === 1 ? 'table-row__white' : 'table-row__grey'
                  }
                  key={`row${elem}`}
                >
                  {[1, 2, 3].map((item, idx) =>
                    idx === 0 ? (
                      <th
                        className="table-row--cell"
                        key={`cell${idx}`}
                        scope="row"
                      >
                        Cell {item}
                      </th>
                    ) : (
                      <td className="table-row--cell" key={`cell${idx}`}>
                        Cell {item}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </thead>
        </table>
      ))}
    </>
  );
}

export default TablePage;
