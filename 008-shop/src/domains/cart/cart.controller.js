import {Product} from "../product/product.model.js";

class CartController {
    async checkout(req, res, next) {
        res.render('checkout', {
            cart: req.session.cart
        });
    }

    async store(req, res, next) {
        const slug = req.params.slug;
        try {
            const product = await Product.findOne({ slug: slug });
            // 처음 카트에 상품을 넣을 때
            if (!req.session.cart) {
                req.session.cart = [];
                req.session.cart.push({
                    title: slug,
                    qty: 1,
                    price: product.price,
                    image: '/static/assets/images/' + product._id + '/' + product.image
                })
            } else {
                let cart = req.session.cart;
                let newItem = true;

                // 만약 이미 카트에 있는 상품이라면 한 개 추가하고 loop break
                for (let i = 0; i < cart.length; i++) {
                    if (cart[i].title === slug) {
                        cart[i].qty++;
                        newItem = false;
                        break;
                    }
                }

                //  처음 추가 하는 상품이라면
                if (newItem) {
                    cart.push({
                        title: slug,
                        qty: 1,
                        price: product.price,
                        image: '/static/assets/images/' + product._id + '/' + product.image
                    })
                }
            }
            req.flash('success', '상품이 추가되었습니다.');
            res.redirect('back');
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async update(req, res, next) {
        const slug = req.params.slug;
        const action = req.query.action;
        let cart = req.session.cart;

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].title === slug) {
                switch (action) {
                    case "add":
                        cart[i].qty++;
                        break;
                    case "remove":
                        cart[i].qty--;
                        if (cart[i].qty < 1) {
                            cart.splice(i, 1);
                        }
                        break;
                    case "clear":
                        cart.splice(i, 1);
                        if (cart.length === 0) {
                            delete req.session.cart;
                        }
                        break;
                    default:
                        console.log('올바른 action을 넣어주세요.');
                        break;
                }
                break;
            }
        }
        req.flash('success', '장바구니가 업데이트되었습니다.');
        res.redirect('back');
    }

    async delete(req, res, next) {
        delete req.session.cart;

        req.flash('success', '장바구니가 비워졌습니다.');
        res.redirect('back');
    }

    async complete(req, res, next) {
        console.log(req.body)
        // process
            // stock -
            // send notify to physically process team
            // send email to order person
            // save what product real sold

        delete req.session.cart

        res.sendStatus(200)
    }
}

export const cartController = new CartController()