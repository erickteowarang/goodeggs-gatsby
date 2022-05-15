const formatter = ({ 
 fieldResponse,
 type
}: {
  fieldResponse: any;
  type: string;
}) => {
  switch (type) {
    case "EMAIL":
      return {
        emailValues: {
          value: fieldResponse,
        },
      };
    case "SELECT":
      return {
        value: fieldResponse.label,
      };
    case "CONSENT":
    case "DATE":
    case "HIDDEN":
    case "NUMBER":
    case "PHONE":
    case "POSTCONTENT":
    case "POSTEXCERPT":
    case "POSTTITLE":
    case "RADIO":
    case "SIGNATURE":
    case "TEXTAREA":
    case "TEXT":
    case "WEBSITE":
      return {
        value: fieldResponse,
      };
    case "FILEUPLOAD":
      return {
        fileUploadValues: fieldResponse,
      };
    default:
      return {};
  }
};

export default ({ serverData, clientData }: {
  serverData: any;
  clientData: any;
}) => {
  const formattedData = serverData
    .map(({ type, id }: {
      type: string;
      id: number;
    }) => {
      // Does this particular field have a response?
      const fieldResponse = clientData[`input_${id}`];

      // If so, lets re-format and add to array.
      if (fieldResponse) {
        return {
          id,
          ...formatter({ fieldResponse, type }),
        };
      }
    })
    .filter(Boolean);

  return formattedData;
};