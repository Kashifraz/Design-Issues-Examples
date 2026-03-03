
            if ($userRole === 'manager') {
                if (!$this->storeModel->hasAccess($expense['store_id'], $userId, $userRole)) {
                    return $this->forbidden('You do not have access to this expense');
                }
            }

            return $this->success($expense, 'Expense retrieved successfully');
