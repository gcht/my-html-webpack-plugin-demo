# HtmlWebpackPlugin


### webpack-dev-server --progress --colors

### http://localhost:8080/webpack-dev-server/bundle
## 主要属性
- inject
- chunks
    - 当设置chunks时，inject失效（不起作用）
- 如果使用template代码来实现制定加载，需要设置inject为false！！！重要的事情说三遍，切记！切记！切记！

```
    new HtmlWebpackPlugin({
        filename: 'html/app/list-[chunkhash:8].html',			
        title:'the script is loaded by the template code in the html at' + (new Date()).toLocaleString(),
        template: 'src/tpl/tpl-list.html',
        inject: false,       //inject默认是true，也就是说HtmlWebpackPlugin会自动加载entry里面所有的js；
        //如果设置了chunks会按照chunks来加载，inject就失效（设置与否不起作用）了。
        //如果不想加载所有入口js，可以有两种方式：
        //方式1:直接设置chunks
        //方式2:（1）设置inject为false，（2）然后通过template代码加载所需要的。注意：如果不设置inject为false，inject也会起作用，造成重复加载			
        showErrors: true
    })
```