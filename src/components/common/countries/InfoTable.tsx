"use client";

type TableRow = {
  label: string;
  value: string | string[];
};

type Props = {
  data: TableRow[];
};

const InfoTable = ({ data }: Props) => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto border border-gray-300">
        <table className="w-full border-collapse table-fixed">
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-300 odd:bg-slate-100"
              >
                {/* LEFT */}
                <td className="w-1/2 font-medium p-4 border-r border-gray-300 text-sm">
                  {row.label}
                </td>

                {/* RIGHT */}
                <td className="w-1/2 p-4 text-sm text-gray-800">
                  {Array.isArray(row.value) ? (
                    <ul className="list-decimal ml-5 space-y-1">
                      {row.value.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    row.value
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default InfoTable;
