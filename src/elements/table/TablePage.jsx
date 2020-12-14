import React from 'react';

function TablePage() {
  const themes = ['indigo', 'yellow', 'red'];
  return (
    <>
      {themes.map((theme) => (
        <table
          className={`theme-${theme} zep-table`}
          key={theme}
          style={{ marginBottom: 30 }}
        >
          <caption className="zep-visually-hidden">{`table ${theme}`}</caption>
          <thead>
            <tr className="zep-table__row">
              {[1, 2, 3].map((elem) => (
                <th
                  scope="col"
                  className="zep-table__cell zep-table__cell--header"
                  key={`col${elem}`}
                >
                  Header {elem}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[1, 2].map((elem2) => (
              <tr key={`row${elem2}`}>
                {[1, 2, 3].map((item, idx) =>
                  idx === 0 ? (
                    <th
                      className="zep-table__cell"
                      key={`cell${idx}`}
                      scope="row"
                    >
                      Cell {item}
                    </th>
                  ) : (
                    <td className="zep-table__cell" key={`cell${idx}`}>
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
