.productCard {
    max-width: 316px;
    border: 1px solid #DDDDDD;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    transition: ease-in-out 500ms;
    &:hover {
        button {
          visibility: visible;
        }
}
}

.productCard:hover {
    box-shadow: 0 0 10px 0.1px #0D50FF;
    transform: scale(1.01);
}

.productCard_imgBox {
    width: 100%;
    height: 284px;
    border-bottom: 1px solid #DDDDDD;
    overflow: hidden;
}

.productCard_img {
    max-width: 316px;
    object-fit: cover;
}

.discountLabel {
    width: 63px;
    height: 34px;
    background: #0D50FF;
    padding: 4px 8px;
    border-radius: 8px;
    margin-left: 16px;
    position: absolute;
    top: 16px;
    right: 16px;
    overflow: hidden;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
    text-align: center;
    animation: shakeAnimation 3s ease-out infinite;
}