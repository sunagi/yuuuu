function createWallet() {
    var inputString = document.getElementById('inputString').value;

    // バックエンドにAPIリクエストを送信
    fetch('/generateWallet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputString }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // 成功時の処理、例えば生成されたデジタルパスのリンクを表示
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
