
    let message = notification.message;
    let type = 'info';

    switch (notification.type) {
      case 'LIKE':
        message = `${actorName} liked your post`;
        type = 'success';
        break;
     ...
     ...
      case 'COMMENT_LIKE':
        message = `${actorName} liked your comment`;
        type = 'success';
        break;
      default:
        message = notification.message;
    }
