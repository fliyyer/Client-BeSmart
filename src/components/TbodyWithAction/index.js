import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import moment from "moment";

function TbodyWithAction({
  data,
  display,
  editUrl,
  deleteAction,
  actionNotDisplay,
  customAction,
  customActionSecond,
  confirmationUrl,
  Detail,
  status,
}) {
  const navigate = useNavigate();
  return (
    <tbody>
      {status === "process" ? (
        <tr>
          <td colSpan={display.length + 1} style={{ textAlign: "center" }}>
            <div className="flex items-center justify-center">
              <Spinner animation="border" variant="primary" />
            </div>
          </td>
        </tr>
      ) : data.length ? (
        data.map((data, index) => {
          return (
            <tr key={index}>
              {Object.keys(data).map(
                (key) =>
                  display.indexOf(key) > -1 && (
                    <td key={key}>
                      {key === "date_requestWO" 
                        ? moment(data[key]).format("DD-MM-YYYY, h:mm:ss a")
                        : data[key]}
                    </td>
                  )
              )}
              {!actionNotDisplay && (
                <td>
                  {customAction && customAction(data.id, data.StatusWO)}
                  {customActionSecond && customActionSecond(data.id, data.StatusWO)}
                  {editUrl && (
                    <Button
                      variant="success"
                      size={"sm"}
                      action={() => navigate(`${editUrl}/${data.id}`)}
                    >
                      Edit
                    </Button>
                  )}
                  {confirmationUrl && (
                    <Button
                      variant="secondary"
                      size={"sm"}
                      action={() => navigate(`${confirmationUrl}/${data.id}`)}
                    >
                      Confirmation
                    </Button>
                  )}
                  {Detail && (
                    <Button
                      variant="warning"
                      size={"sm"}
                      className={"ms-2"}
                      action={() => navigate(`${Detail}/${data.id}`)}
                    >
                      Detail
                    </Button>
                  )}
                  {deleteAction && (
                    <Button
                      className={"mx-2"}
                      variant="danger"
                      size={"sm"}
                      action={() => deleteAction(data.id)}
                    >
                      Hapus
                    </Button>
                  )}
                </td>
              )}
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan={display.length + 1} style={{ textAlign: "center" }}>
            Tidak Ditemukan Data
          </td>
        </tr>
      )}
    </tbody>
  );
}

export default TbodyWithAction;
