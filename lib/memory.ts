export const saveChats = (messages: any) => {

  localStorage.setItem(
    "synthesise_chats",
    JSON.stringify(messages)
  );

};

export const loadChats = () => {

  const data = localStorage.getItem(
    "synthesise_chats"
  );

  return data ? JSON.parse(data) : [];

};
