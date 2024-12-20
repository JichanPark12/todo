export interface SimpleTodo {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface DetailTodo extends SimpleTodo {
  tenantId: string;
  memo: string;
  imageUrl: string;
}
