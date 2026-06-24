"use client";

type FeeRow = {
  label: string;
  values: string[];
  isTotal?: boolean;
};

type FootNote = {
  text: string;
  style: "salmon" | "blue";
};

type Props = {
  title?: string;
  headers: string[];
  rows: FeeRow[];
  footnotes?: FootNote[];
};

const FeeTable = ({ title, headers, rows, footnotes }: Props) => {
  const colSpan = headers.length;

  return (
    <section className="w-full bg-white py-8 px-4 md:px-8">
      {title && (
        <h3 className="text-xl font-bold text-[#0b2a5b] mb-4">{title}</h3>
      )}
      <div className="max-w-7xl mx-auto overflow-x-auto border border-gray-300 rounded-sm">
        <table className="w-full border-collapse text-sm min-w-160">
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th
                  key={i}
                  style={i !== 0 ? { backgroundColor: "#4caf50", color: "#fff" } : undefined}
                  className={`p-3 font-bold border border-gray-300 ${
                    i === 0
                      ? "bg-white text-[#0b2a5b] text-left w-48"
                      : "text-center"
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                style={row.isTotal ? { backgroundColor: "#fde9d9" } : undefined}
                className={!row.isTotal ? (i % 2 === 0 ? "bg-white" : "bg-slate-50") : ""}
              >
                <td
                  className={`p-3 border border-gray-300 font-semibold ${
                    row.isTotal
                      ? "text-[#1e4e96] text-lg font-black"
                      : "text-[#0b2a5b]"
                  }`}
                >
                  {row.label}
                </td>
                {row.values.map((val, j) => (
                  <td
                    key={j}
                    className={`p-3 border border-gray-300 text-center ${
                      row.isTotal ? "text-gray-700 font-semibold" : "text-gray-700"
                    }`}
                  >
                    {val}
                  </td>
                ))}
              </tr>
            ))}

            {footnotes?.map((note, i) => (
              <tr
                key={`fn-${i}`}
                style={note.style === "salmon" ? { backgroundColor: "#fde9d9" } : { backgroundColor: "#fff" }}
              >
                <td
                  colSpan={colSpan}
                  className="p-3 border border-gray-300 text-center font-bold text-base"
                  style={
                    note.style === "salmon"
                      ? { color: "#c0392b", fontStyle: "italic", textDecoration: "underline" }
                      : { color: "#1e4e96" }
                  }
                >
                  {note.text}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FeeTable;
