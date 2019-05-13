import React from 'react';

function TablePage() {
  const themes = ['zeppelin', 'cat', 'rental'];
  return (
    <>
      {themes.map(elem => (
        <table
          className={`theme-${elem} zep-table`}
          key={elem}
          style={{ marginBottom: 30 }}
        >
          <caption className="zep-visually-hidden">{`table ${elem}`}</caption>
          <thead className="">
            <tr className="zep-table__row zep-table__row--header">
              {[1, 2, 3].map(elem => (
                <th
                  scope="col"
                  className="zep-table-header--cell"
                  key={`col${elem}`}
                >
                  Header {elem}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {[1, 2].map(elem => (
              <tr
                className={
                  elem === 1 ? 'zep-table-row__white' : 'zep-table-row__grey'
                }
                key={`row${elem}`}
              >
                {[1, 2, 3].map((item, idx) =>
                  idx === 0 ? (
                    <th
                      className="zep-table-row--cell"
                      a
                      key={`cell${idx}`}
                      scope="row"
                    >
                      Cell {item}
                    </th>
                  ) : (
                    <td className="zep-table-row--cell" key={`cell${idx}`}>
                      Cell {item}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </>
  );
}

export default TablePage;
